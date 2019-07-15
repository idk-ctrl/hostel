export class Personal {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public position: string;
    public phone: string;
    constructor(data?) {
        if (data == null || data === 'undefined') {
            return;
        }
        this.id = data.id;
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.email = data.email || '';
        this.position = data.position || '';
        this.phone = data.phone || '';
    }
}
