export class Task{

    private taskId:string;
    private taskName:string;
    private taskDeadLine:Date;
    private taskDescription:string;

    constructor(
        taskId:string,
        taskName:string,
        taskDeadLine:Date,
        taskDescription:string
    ){
        this.taskId=taskId;
        this.taskName=taskName;
        this.taskDeadLine=taskDeadLine;
        this.taskDescription=taskDescription;
    }
    

}