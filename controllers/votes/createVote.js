
const { insertVoteRepositories, selectVoteByUserId } = require("../../repositories/votes");
const { generateError } = require("../../helpers/generateError");


const createVote = async (req, res, next) => {
  try {
    const userAuth = req.auth.id;
    //requiere una id de usuario para ver que está logueado

    if (!userAuth) {
        console.log("error, usuario sin autenticar //  Unlogged user")
        res.status(400).send({ status: "error", data: { userAuth: userAuth } });
        next(error);
    }
    //Esto comprueba que haya llegado una cabecera de autenticacion, sino , rompe el programa.

    const { entryId, userId } = req.body;
    //recogemos del body los parametros

    const voteWithSameUserId = await selectVoteByUserId(userId, entryId);
    //busca usuario con el mismo email

    console.log(voteWithSameUserId)
    if (voteWithSameUserId !== undefined) {
      throw generateError("that entry already has your vote", 400);
      //lanza error si existe un voto con mismo userid y entryid para evitar duplicados
      res.status(400).send({ status: "error", data: { voteWithSameUserId } });
      next(error);
      //pasa al siguiente middleware de errores.
    }

   
    


    const insertVote = await insertVoteRepositories({
      entryId,
      userId
    });
    //pasa los parámetros a insertar a insertVote para que se cree un voto con ese usuario y ese entryID, después los
    //agruparemos los votos por numero userid para que se vean el contador de votos.

   

    res.status(201).send({ status: "ok", data: { insertVote: insertVote } });
  } catch (error) {
    console.log(error.message)
    next(error);
  }
};

module.exports = createVote;
