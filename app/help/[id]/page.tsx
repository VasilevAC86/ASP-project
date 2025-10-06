import Label from "../_lip/label";

interface IdProps{
    params: {id: string}
}

export default function Id({params}: IdProps){
    const {id} = params;
    return(
        <div>
            <p>{id}</p>
        </div>         
    )
}