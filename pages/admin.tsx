import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link'


export default function Album() {
    return (
        <React.Fragment>
            <CssBaseline />
            <main>

                <Link href="/admin/newBuildings">
                    <a>Новые объекты</a>
                </Link>
            
                <Link href="/admin/District">
                    <a>Районы</a>
                </Link>
                <Link href="/admin/locations">
                    <a>Населенные пункты</a>
                </Link>
                
                <Link href="/admin/Objects">
                    <a>Объекты недвижимости</a>
                </Link>
            </main>

        </React.Fragment>
    );
}
