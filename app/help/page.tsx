import { text } from "stream/consumers";
import Label from "./_lip/label";
import Button from "../_components/button";
import Link from "next/link";
import RouteButton from "./_lip/routeButton";

// создаём компонент реакта
export default function Help(){

    return(
        <div className="grid grid-cols-2 gap-4">
            <Label text="Привет!"></Label>
            <RouteButton>Push me</RouteButton>      

            <a href="help/1">1</a> {/*Долго, не использовать, т.к. полностью обновляет и перерисовывает страницу */}
            <Link href="help/1"
            scroll = {false} // Не прокручивать к началу страницы
            prefetch = {false} // Отключить перезагрузку
            >1</Link> {/* Быстрее, надо использовать, но только для внутренних ссылок, для внешних ссылок надо тэг a*/}
        </div>         
    )
}