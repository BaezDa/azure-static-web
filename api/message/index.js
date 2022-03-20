module.exports = async function (context, req) {
    context.res.json({
        text: "Hola desde la API"
    });
};