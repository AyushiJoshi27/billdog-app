import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchUsers } from '../../redux/slices/userSlice';

export default function UserPage() {
  const userData = useAppSelector(state => state.usersList)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {userData.loading && <div>Loading...</div>}
      {!userData.loading && userData.error ? <div>Error: {userData.error}</div> : null}
      {!userData.loading && userData.users.length ? (
        <ul>
          {userData.users.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}