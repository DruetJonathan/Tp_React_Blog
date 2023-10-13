import {useFetch} from "../Hooks/useFetch.js";
import {Spinner} from "../components/Spinner.jsx";
import {Alert} from "../components/Alert.jsx";
import {Card} from "../components/Card.jsx";
import {useDocumentTitle} from "../Hooks/useDocumentTitle.js";
import {Button} from "../components/Button.jsx";
import {useToggle} from "../Hooks/useToggle.js";
import {Modal} from "../components/Modal.jsx";
import {EditPostModal} from "./Single/EditPostModal.jsx";

export function Single({postId}) {
    const {loading, data: post, errors,setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, '');
    useDocumentTitle(post?.title)
    const [isEditing, toggleEditing] = useToggle(false);
    const handleSave = (data) =>{
        setData({
            ...post,
            ...data
        })
    }
    if (loading) {
        return <Spinner/>;
    }

    if (errors) {
        return <Alert type="danger">{errors.toString()}</Alert>;
    }

    return <>
        <h1>{post.title}</h1>
        <img src={`https://picsum.photos/id/${post.id}/280/180`} className="img-fluid img-thumbnail my-3"/>
        <p>{post.body}</p>
        {isEditing && <EditPostModal
            post={post}
            onClose={toggleEditing}
            OnSave={handleSave}
        />}

        <Button variant="secondary" onClick={toggleEditing}>
            Editer article
        </Button>
        <br/>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
    </>

}
