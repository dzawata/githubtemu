class Github{
    constructor() {
        this.client_id = 'dcac0777712cec36701e';
        this.client_secret = '3fc0e364578b66ada4f48b9ae384579baa83a893';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        
        return {
            profileData
        }
    }
}