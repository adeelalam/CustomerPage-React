import React from 'react'

function Header() {
    
    const customerFirstName = 'Anna';
    const customerLastName = 'Anne';
    const customerPersonnummer = '19901230-4567' 
    
    return (
        <div>
            <nav>
                <h1>{customerFirstName} {customerLastName} ({customerPersonnummer})</h1>
            </nav>
        </div>
    )
}

export default Header
