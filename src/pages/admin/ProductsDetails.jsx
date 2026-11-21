import { useParams } from "react-router";

function ProductDetails(){
     const params = useParams();
     const {id} = useParams();
    
    return(
        <div>
            <h1>This is product details page</h1>
            <p>Product id is: {params.id}</p>
            <p>Product id is: {id}</p>
        </div>
    )
}

export default ProductDetails