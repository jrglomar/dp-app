import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { store } from '../../store/store'
import MainHeader from '../Navigation/MainHeader'

export default function RootPage() {
    return (
        <Provider store={store}>
            <MainHeader />
            <Outlet />
        </Provider>
    )
}
