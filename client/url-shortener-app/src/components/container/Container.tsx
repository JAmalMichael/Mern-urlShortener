import * as React from 'react';
import FormContainer from '../formcontainer/FormContainer';
import { UrlData } from '../../assets/UrlData';
import { serverUrl } from '../../helpers/Contants';
import axios from 'axios';
import DataTable from '../dataTable/DataTable';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data, setData] = React.useState<UrlData[]>([]);
    const [reload, setReload] = React.useState<boolean>(false);

    const updateReloadState = () => {
        setReload(true);
    }

    const fectchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`);
        console.log("The response from server is: ", response);
        setData(response.data);
        setReload(false);
    }

    React.useEffect(() => {
        fectchTableData();
    }, [reload])

    return (
    <> <FormContainer updateReloadState={updateReloadState} /> 
    < DataTable updateReloadState={updateReloadState} data={data} />
    </>
    );
};

export default Container;