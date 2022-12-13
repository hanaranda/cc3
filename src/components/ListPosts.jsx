import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListPosts() {
    const { id } = useParams()
    const userListe = useSelector(state => state.user.data)
    const ListPosts = useSelector(state => state.ListPosts.data)
    const selectedUser = userListe.users.filter(user => user.id == id)
    const selectedPosts = ListPosts.Posts.filter(Posts => Posts.id == id)
    return (
        <div>
            <h1>{`${(selectedUser[0].firstName).toUpperCase()} ${(selectedUser[0].lastName).toUpperCase()}`} POSTS LIST</h1>
            <div className='Info'>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>State</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedPosts .map(Posts => <tr key={Posts.id}>
                            <td>
                                {Posts.Posts}
                            </td>
                            
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
