import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    if (!token) redirect('/signin');

    return (<h1>Hello</h1>)
}