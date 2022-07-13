const {
  selectEntryById,
  updateEntryById,
} = require("../../repositories/entries");
const { generateError } = require("../../helpers/generateError");
const { createPathIfNotExists} = require("../../helpers/generateError")
const path = require("path");
const sharp = require("sharp");
const {nanoid} = require("nanoid");
const {newEntrySchema} = require("../../schemas/entries")

const editEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;
    console.log(idEntry)
    const entryDB = await selectEntryById(idEntry);

    if (!entryDB) {
      throw generateError("Entry does not exist", 404);
    }

    const userRole = req.auth.role; //De dónde viene .auth.id?

    if (userRole !== "admin") {
      throw generateError("Only admin users can edit entries", 400);
    }/*
    await updateEntryById({ ...entryDB, ...req.body });

    res.status(200).send({ status: "ok", message: "Entry updated" });
  } catch (error) {
    next(error);
  }*/

  const { title, description, city, neighborhood, status } = req.body;
  //recogemos del body los parametros

//-----------------------CODIGO NUEVO PARA IMGANES ------------------------------------------


//console.log(req.files);
//console.log(req.files.image);
//req.files---> .image es el nombre de la KEY que ponemos en el postman
let imageFileName = entryDB.photo; //Carga la photo que hay en el back y luego si recibe del front otra foto, hace lo de abajo
if (req.files && req.files.image ) {
//Creo el path del directorio uploads
  const uploadsDir = path.join(__dirname, `../../uploads`);
  console.log(uploadsDir);
//Creo el directorio si no existe
  await createPathIfNotExists(uploadsDir);
console.log("Sale de createpath");
//procesar la imagen
  console.log(req.files.image);
const image = sharp(req.files.image.data);
image.resize(500);
//guardo la imagen con un nombre aleatorio en el directorio uploads
imageFileName = `${nanoid(24)}.jpg`;
await image.toFile(path.join(uploadsDir, imageFileName));
};


//----------------------------------------------------------------------------
  const insertId = await updateEntryById({ title, description, imageFileName, city, neighborhood, status, id:idEntry });
  //const insertId = await updateEntryById({...entryDB, ...req.body });
  //pasamos los paramretros a updaterentry y lo guardamos en la constante insertId

  res.status(201).send({
    status: "ok",
    data: { id:insertId, title, description, photo: imageFileName, city, neighborhood, status},
  });
} catch (error) {
  next(error);
}

};

module.exports = editEntry;
