import { useVisible } from '../../hooks/useVisible';
import { ModalInfo } from '../../templates/Modal';
import { Button } from '../Button';

import './styles.css';

function Table({ users }) {
    const { visible, loadMoreUser } = useVisible();
   
    return (
        <>
            <table className="table table-responsive table-bordered mt-4 mb-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Aniversário</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0, visible).map((user, indice) => (
                      <tr key={indice}>
                      <td>{user.id.name || 'n/a'}</td>
                      <td>{user.name.first}</td>
                      <td>{user.gender}</td>
                      <td>{user.nat}</td>
                      <td>{new Date(user.dob.date).toLocaleDateString()}</td>
                      <td><ModalInfo body={user} /></td>
                    </tr>
                    ))}                 
                </tbody>
            </table>
            <div className="container d-flex justify-content-center align-items-center button_modal mb-4">
                <Button onClick={loadMoreUser} text="Load more users..."/>
            </div>
        </>
    );
}
export { Table }
