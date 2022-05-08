export default function addressesEqual(addr1, addr2) {
    console.log("owner", addr1, "connectedAccount", addr2)
    if (!addr1 || !addr2) return false;
    return addr1.toUpperCase() === addr2.toUpperCase();
}
