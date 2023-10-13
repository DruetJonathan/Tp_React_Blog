import {useDocumentTitle} from "../Hooks/useDocumentTitle.js";
import {useFetch} from "../Hooks/useFetch.js";
import {Spinner} from "../components/Spinner.jsx";
import {Alert} from "../components/Alert.jsx";
import {Card} from "../components/Card.jsx";

export function Home() {
    useDocumentTitle('Mon Blog')
    const {loading,data,errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=3000','')

    if (loading){
        return <Spinner/>
    }
    if(errors){
        return <Alert type="danger">{errors.toString()}</Alert>
    }



    return <>
        <h1 className="mb-3">Mon Blog</h1>
        {data && <div className="row gap-4">
            {
                data.map((post) => (
                    <div className="col-12 col-md-4" key={post.id}>
                        <Card
                            image={`https://picsum.photos/id/${post.id}/280/180`}
                        title={post.title}
                        post={post.body}
                        href={`#post:${post.id}`}
                        buttonLabel="Voir l'article"
                        />
                    </div>
                ))
            }
        </div>}
    </>
}