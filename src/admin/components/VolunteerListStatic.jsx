import React from 'react'
import VolunteerCardStatic from './VolunteerCardStatic'

const VolunteerListStatic = ({
   volunteers
}) => {
    return (
        volunteers.map(volunteer =>
            <VolunteerCardStatic key={volunteer.email} volunteer={volunteer} />
        )
    )
}
export default VolunteerListStatic;