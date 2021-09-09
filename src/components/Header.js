import React from 'react'

function Header() {
    const customerName = 'Anna Anne';
    const customerPersonnummer = '19901230-4567' 
    return (
        <div>
            <nav>
                <h1>{customerName} ({customerPersonnummer})</h1>
            </nav>
        </div>
    )
}

export default Header
