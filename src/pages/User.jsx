import { useLocation } from "react-router"
import { User as UserPage } from '../components/User'

export default function User(props) {    
    const location = useLocation()

    return (
        <UserPage userData={location.state}  />
    )
}