const EsperarSegundos = async (num) => {
    // await setTimeout(num);

    setTimeout(() => {
        console.log("Bienvenid@ han tasncurrido", num/1000, "segundos");
      }, num);

} 

export default EsperarSegundos;