var messages = [];
var id = 0;
module.exports = {
    create: (req, res) =>{
        const {text, time} = req.body;

        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read:(req, res) =>{
        res.status(200).send(messages);
    },
    update:(req, res) =>{
        const editId = +req.params.id;
        messages.map( (e, i, arr) =>{
            if (e.id === editId){
                messages[i] = {
                    id: messages[editId].id,
                    text: req.body.text || messages[editId].text,
                    time: req.body.time || messages[editId].time
                }
            }
        })

        res.status(200).send(messages)
    },
    delete:(req, res) =>{
        const deleteId = +req.params.id;

        const messageIndex = messages.findIndex((curr)=>{
            return curr.id === deleteId;
        });

        messages.splice(messageIndex, 1);

        res.status(200).send(messages);
    }
}