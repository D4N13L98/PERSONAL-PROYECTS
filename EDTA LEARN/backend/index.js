import app from "./api/index.js";
import db from "./db/db.js";

const port = 5000;

app.listen(port, () => {
    try {
        db();
        console.log(`Servidor backend corriendo en http://localhost:${port}`);
    } catch (error) {
        console.log(error)
    }
});
