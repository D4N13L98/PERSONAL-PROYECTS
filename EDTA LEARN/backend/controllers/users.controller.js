import User from "../models/users.js";

export async function createUser(req, res) {
  try {
    const { name, lastname, email, password } = req.body;
    const newUser = new User({ name, lastname, email, password });
    await newUser.save()

    res.send({ message: "Usuario registrado exitosamente", data: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "El email ha sido registrado anteriormente",
      err,
    });
  }
}

export async function getUser(req, res) {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "Usuario no encontrado" , data:user});
    }
    res.send({ message: "Usuario encontrado", data:user });
  } catch (err) {
    res.send({
      message: `No se ha encontrado el email: ${email}`,
      err,
    });
  }
}
