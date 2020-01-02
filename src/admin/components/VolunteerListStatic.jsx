import React from 'react'
import VolunteerCardStatic from './VolunteerCardStatic'

const VolunteerListStatic = ({
   volunteers,
   onDelete,
}) => {
    return (
        volunteers.map(volunteer =>
            <VolunteerCardStatic key={volunteer.email} volunteer={volunteer}  onDelete={onDelete}/>
        )
    )
}
export default VolunteerListStatic;