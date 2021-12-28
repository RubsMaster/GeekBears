import Links from "../models/Links";

export const encodeURL = async (req, res) => {
  const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  const randomString = generateString(6);
  const encoded = "http://short.ly/" + randomString;

  const newURL = new Links({
    URL: req.body.url,
    URLshort: encoded,
    Code: randomString
  });
  await newURL.save();
  res.json(newURL);
};

export const decodeURL = async (req, res) => {
    const code = req.params.code;
    console.log(code);
    const result = await Links.findOne({
        Code: {
            $eq:code
        }    
    })
    res.json(result)

}