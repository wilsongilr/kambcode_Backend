
const tokenApi = process.env.TOKEN_KEY;

export const verifyTokenMiddleware = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
    return res.status(401).json({ msg: "No token present"});
    }
   try {
      if(token === tokenApi){
        next()
      }else {
        return res.status(401).json({ msg: "Token not valid"});
      }

   } catch (err) { 
   }
    next()
   };




export const validarDatosMiddleware = (req, res, next) => {
    if(
        req.body.name && req.body.age
        && typeof req.body.name === 'string' && typeof req.body.age === 'number'
        && req.body.age > 0 && req.body.name !== '' && req.body.name !== null
    ) {
        next()
    }else{
        res.send('Datos incorrectos, los estudiantes deben tener: name, edad, la edad debe ser mayor a 0, poner atencion en los tipos ')
    }
}


