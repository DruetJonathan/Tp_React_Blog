import {Modal} from "../../components/Modal.jsx";
import {Input} from "../../components/Input.jsx";
import {Button} from "../../components/Button.jsx";
import {useState} from "react";
import {Alert} from "../../components/Alert.jsx";

export function EditPostModal({post,onClose,OnSave}) {
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const handlkeSubmit = (e) => {
      e.preventDefault()
        setError(null)
        setLoading(true)
        const data = new FormData(e.target)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
            method: 'PUT',
            body: data
        }).then(r=> r.json())
            .then((r)=>{
                OnSave(Object.fromEntries(data.entries()))
            }).catch((error) => setError(error))
            .finally(()=> setLoading(false))
    }


    return <Modal onClose={onClose}>
        <h1>Editer Article</h1>
        {error && <Alert type="danger">{error.toString()}</Alert> }
        <form action="" onSubmit={handlkeSubmit} className="vstack gap-3">
            <Input name="title" label="Titre" defaultValue={post.title}></Input>
            <Input name="body" label="Conteny" type="textarea" defaultValue={post.body}></Input>
            <Button disabled={loading} type="button" onClick={onClose}>Annuler</Button>
            <Button disabled={loading} type="submit">Save</Button>
        </form>
    </Modal>
}