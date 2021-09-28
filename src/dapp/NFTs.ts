//import * as IPFS from 'ipfs-core'
/*
function getIPFScid() {
    const ipfs = IPFS.create()
    const { cid } = ipfs.add('Hello world')
    //console.info(cid)
    // QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
    return cid;
}
*/

/* eslint-disable import/prefer-default-export */
export function getNFTs() {

    const values = [
        {
            "name": "NFT Shiba",
            "description": "This image shows the true nature of ToTheMoon Meaning.",
            "image": "http://www.threadbombing.com/data/media/2/EsvcgzrXEAM-G2X.gif",
            "contract": {
                "abi": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
                "address": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
            }
        },
        {
            "name": "NFT Shiba",
            "description": "This image shows the true nature of ToTheMoon Meaning.",
            "image": "https://c.tenor.com/3La-njJKab8AAAAd/dog-float.gif",
            "contract": {
                "abi": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
                "address": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
            }
        },
        {
            "name": "NFT Shiba",
            "description": "getIPFScid()",
            "image": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d",
            "contract": {
                "abi": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
                "address": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
            }
        }
    ]

    return values
}