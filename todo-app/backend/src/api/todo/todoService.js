const Todo = require('./todo');

Todo.methods(['get','post','put','delete']);
// tag new: true é para sempre retornar o registro atualizado.
// tag runValidators: true é realizar a validação do registro que esta sendo atualizado.
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;