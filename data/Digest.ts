import crypto from 'crypto';
import Forminterface from './Forminterface';

function Datahash(data: Forminterface): string {
    const { digest, ...dataWithoutDigest } = data; 
    const jsonData = JSON.stringify(dataWithoutDigest); 
    const computedDigest = crypto.createHash('sha256').update(jsonData).digest('hex');
    return computedDigest;
}

function hashDataandAdd(data: Forminterface): void {
    const computedDigest = Datahash(data); 
    data.digest = computedDigest;
}

function verifyHash(data: Forminterface): { verified: boolean; data: Forminterface } {
    const currentHash = data.digest; 
    const computedHash = Datahash({ ...data, digest: "" }); 

    if (!currentHash || currentHash !== computedHash) {
        hashDataandAdd(data);
        return { verified: false, data }; 
    }

    return { verified: true, data };
}

export {
    hashDataandAdd,
    verifyHash
};
