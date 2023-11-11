import {v4 as uuid} from "uuid"

export default function mapMainMenuItems(menuItems){
    return menuItems.map(menuItem =>({
        id: uuid(), 
        destination: menuItem.menuItem.destination?.uri, 
        label: menuItem.menuItem.label,
    }))
}