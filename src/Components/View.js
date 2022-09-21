import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({musics, deleteMusic}) => {
    return musics.map(music=>(
        <tr key={music.title}>
            <td>{music.title}</td>
            <td>{music.singer}</td>
            <td>{music.genre}</td>
            <td>{music.year_released}</td>
            <td className='delete-btn' onClick={()=>deleteMusic(music.title )}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}