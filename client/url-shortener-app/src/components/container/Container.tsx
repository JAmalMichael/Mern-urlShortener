import * as React from 'react';
import FormContainer from '../formcontainer/FormContainer';
import { UrlData } from '../../assets/UrlData';
import { serverUrl } from '../../helpers/Contants';
import axios from 'axios';
import DataTable from './dataTable/DataTable';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data, setData] = React.useState<UrlData[]>([]);

    const fectchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`);
        console.log("The response from server is: ", response);
        setData(response.data);
        console.log("Data: ", data);
    }

    React.useEffect(() => {
        fectchTableData();
    }, [])

    return (
    <> <FormContainer /> 
    < DataTable data={data} />
    </>
    );
};

export default Container;