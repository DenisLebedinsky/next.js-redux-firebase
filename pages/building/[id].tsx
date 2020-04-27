import {useRouter} from 'next/router'
import Building from '../../src/Components/Buildings/Building'
import CssBaseline from '@material-ui/core/CssBaseline';
import React from "react";

export default function () {
    const router = useRouter()
    const {id} = router.query

    return <>
        <CssBaseline />
        <Building id={id}/>
    </>
}

