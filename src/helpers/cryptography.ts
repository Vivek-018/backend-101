import crypto from 'crypto';

export default class Cryptography {
    static encryptAESGCM = (data: string, masterKey: string) => {
        const iv = crypto.randomBytes(12);
        
        const key = crypto.scryptSync(masterKey, iv, 32);
        
        const createCipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        const encrypted = createCipher.update(data, 'utf-8', 'hex') + createCipher.final('hex');
        const authTag = createCipher.getAuthTag();
        
        return {
            encrypted,
            authTag: authTag.toString('hex'),
            iv: iv.toString('hex')
        }
    }

    static decryptAESGCM = (
        encryptedData: {
            encrypted: string,
            authTag: string,
            iv: string
        },
        masterKey: string
    ) => {
        try{

            const iv = Buffer.from(encryptedData.iv, 'hex');
            
            const key = crypto.scryptSync(masterKey, iv, 32);
            
            const authTag = Buffer.from(encryptedData.authTag, 'hex');
            
            const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
            decipher.setAuthTag(authTag);
            
            return decipher.update(encryptedData.encrypted, 'hex', 'utf-8') + decipher.final('utf-8');
        }
        catch(error){
            throw new Error(`Error while decrypting data: ${error.message}`);
        }
    }
}