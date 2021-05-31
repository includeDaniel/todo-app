import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Paga fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médicas na aterça depois do almoço',
            done: false
        }]
    })
})

export default rootReducer