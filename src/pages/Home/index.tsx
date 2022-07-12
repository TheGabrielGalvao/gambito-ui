import { BiDollar, BiDotsHorizontalRounded, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { Card } from "../../components/gui/Card";
import { Resume } from "../../components/Resume";
import { DashboardHeader } from "./styles";

export const Home = () => (
    <>
        <DashboardHeader>
            <Resume 
                header={
                    {
                        title: 'Teste',
                        button: {
                            children: <BiDotsHorizontalRounded />
                        }
                    }
                }
                body = {
                    {
                        value: 5000, 
                        title: "Entradas", 
                        background: "default", 
                        icon: <BiUpArrowAlt />
                    }
                }  
            />
            <Resume 
                body = {
                    {
                        value: -1000, 
                        title: "Saídas", 
                        background: "default", 
                        icon: <BiDownArrowAlt />
                    }
                }  
            />
            {/* <Resume 
                body = {
                    {
                        value: 4000, 
                        title: "Total", 
                        background: "success", 
                        icon: <BiDollar />
                    }
                }  
            /> */}
        </DashboardHeader>
        <DashboardHeader>
            <Resume 
                header={
                    {
                        title: 'Teste',
                        button: {
                            children: <BiDotsHorizontalRounded />
                        }
                    }
                }
                body = {
                    {
                        value: 5000, 
                        title: "Entradas", 
                        background: "default", 
                        icon: <BiUpArrowAlt />
                    }
                }  
            />
            <Resume 
                body = {
                    {
                        value: -1000, 
                        title: "Saídas", 
                        background: "default", 
                        icon: <BiDownArrowAlt />
                    }
                }  
            />
            <Resume 
                header={
                    {
                        title: 'Teste',
                        button: {
                            children: <BiDotsHorizontalRounded />
                        }
                    }
                }
                body = {
                    {
                        value: 5000, 
                        title: "Entradas", 
                        background: "default", 
                        icon: <BiUpArrowAlt />
                    }
                }  
            />
            <Resume 
                body = {
                    {
                        value: -1000, 
                        title: "Saídas", 
                        background: "default", 
                        icon: <BiDownArrowAlt />
                    }
                }  
            />
        </DashboardHeader>
    </>
)