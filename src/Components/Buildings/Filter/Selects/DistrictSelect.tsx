import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 220,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Район</InputLabel>
            <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
            >
                <option aria-label="None" value=""/>
                <option value={10}>центр</option>
                <option value={20}>парк им.Поддубного</option>
                <option value={30}>военный городок</option>
            </Select>
        </FormControl>
    </div>
}
