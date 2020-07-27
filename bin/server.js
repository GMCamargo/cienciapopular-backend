const app = require('../src/app')

const port = process.env.PORT || 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`API rodando na porta: ${port}`);
});