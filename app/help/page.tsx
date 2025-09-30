import { text } from "stream/consumers";
import Label from "./_lip/label";
import Button from "../_components/button";

// создаём компонент реакта
export default function Help(){

    return(
        <div className="grid grid-cols-2 gap-4">
            <Label text="Привет!"></Label>
            <Button>Push me</Button>
        </div>         
    )
}