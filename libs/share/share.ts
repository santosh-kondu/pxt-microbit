//% color=#004d00 weight=100 icon="\uf3fd" block="share"
namespace share {


    //% blockId=share_setShareLevel block="share level %ShareLevel" weight=54
    //% shim=share::setShareLevel
    export function setShareLevel(sharelevel:ShareLevel): number {
        return sharelevel;
    }

    //% blockId=share_shareData block="share data %data |called %name |with %level" weight=53
    //% shim=share::shareData
    export function shareData(data:string, name:string, level:number): void {
        //basic.showString("OK");
        basic.showIcon(IconNames.Yes);
        return;
    }

    //% blockId=share_fetchData block="fetch shared data called %name |from school %targetSchool" weight=51
    //% shim=share::fetchData
    export function fetchData(name:string, targetSchool:string): string {
        return "EXAMPLE";
    }

    //% blockId=share_textToNumber block="text to number %text" weight=53
    //% shim=share::textToNumber
    export function textToNumber(text:string): number {
        return parseInt(text);
    }

    //% blockId=share_numberToText block="number to text %value" weight=53
    //% shim=share::numberToText
    export function numberToText(value:number): string {
        return value.toString();
    }

    //% blockId=share_fetchSchoolData block="fetch shared data called %name |from my school" weight=52
    //% shim=share::fetchSchoolData
    export function fetchSchoolData(name:string): string {
        return "EXAMPLE";
    }



    
}