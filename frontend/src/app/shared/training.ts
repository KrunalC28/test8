export class Training {
    constructor(
        public id: number,
        public title: string,
        public department:string,
        public taudience: string,
        public trainer: string,
        public date:string,
        public starttime: string,
        public endtime: string,
        public location:string,
        public isStart:string,
        public isComplete: string
    ) { }
}