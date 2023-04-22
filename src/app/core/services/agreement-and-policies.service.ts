import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientModule } from 'src/app/client/client.module';

@Injectable({
  providedIn: ClientModule,
})
export class AgreementAndPoliciesService {
  constructor() {}

  createAgreementAndPolicies(): Observable<Map<string, string>> {
    return of(
      new Map([
        [
          '1. จรรยาบรรณของสมาชิก',
          'ฝ่ายบริหารมีสิทธิยกเลิกสมาชิกภาพของสมาชิกหรือแขกของสมาชิกได้ทันทีที่พบว่า สมาชิกมีพฤติกรรมที่ไม่เหมาะสม เช่น การแสดงพฤติกรรมหรือท่าทางที่ไม่เหมาะสมใดๆทางเพศ การแอบดู การไม่เคารพสิทธิส่วนบุคลของบุคลากรของคลับ เป็นต้น หรือทันทีที่พบว่า สมาชิกหรือแขกของสมาชิกมีพฤติกรรมปลุกปั่นให้เกิดความขัดแย้งต่อคลับหรือกับสมาชิกท่านอื่น ๆ หรือละเมิดกฏระเบียบใด ๆ ของคลับ โดยไม่คืนค่าสมาชิกที่ได้รับชำระไว้แล้วในทุกกรณี',
        ],
        [
          '2. การใช้บริการครั้งแรก',
          'สมาชิกจะต้องนัดหมายวันเวลาที่จะเข้ามาใช้บริการครั้งแรกกับผู้ฝึกสอน เพื่อรับการแนะนำวิธีการใช้อุปกรณ์และวิธีปฏิบัติที่เหมาะสมกับสภาวะทางกายภาพในขณะนั้นของสมาชิก',
        ],
        [
          '3. บัตรสมาชิก',
          'สมาชิกจะต้องแสดงบัตรสมาชิกต่อเจ้าหน้าที่ลูกค้าสัมพันธ์บริเวณเคาน์เตอร์เช็คอินทุกครั้งที่มาใช้บริการ หากไม่มีบัตรสมาชิกมาแสดง ทางคลับขอสงวนสิทธิ์ไม่ให้เข้าใช้บริการในทุกกรณี ทางคลับอาจทำการเรียบเก็บค่าใช้จ่ายในการออกบัตรสมาชิกใบใหม่หากได้รับการร้องขอ',
        ],
        [
          '4. การรักษาอนามัยเพื่อส่วนรวม',
          'กรุณาใช้ผ้าขนหนูผืนเล็ก ซึ่งวางอยู่ใกล้เครื่องออกกำลังกายเช็ดเหงื่อและคราบที่อาจติดอยู่กับอุปกรณ์ออกกำลังกายของท่านหลังใช้อุปกรณ์ออกกำลังกายเครื่องนั้นๆเสร็จ',
        ],
        [
          '5. อาหาร/ยา',
          'ไม่อนุญาตให้นำอาหารเข้ามารับประทานในบริเวณสถานที่ออกกำลังกาย ยกเว้นยา โดยเหตุผลทางการแพทย์',
        ],
        [
          '6. เครื่องดื่ม',
          'อนุญาตเฉพาะเครื่องดื่มที่บรรจุในภาชนะที่เหมาะสมสำหรับดื่มแก้กระหายระหว่างการออกกำลังกายหรือเพื่อเหตุผลทางการแพทย์เท่านั้น',
        ],
        [
          '7. ความรับผิดชอบ',
          'การใช้อุปกรณ์ใด ๆ ภายในคลับ และการตระหนักถึงข้อจำกัดทางกายภาพที่เหมาะสมและปลอดถัยในการใช้บริการออกกำลังกาย เป็นหน้าที่ของสมาชิกและแขกของสมาชิกที่ต้องดูแลและระมัดระวังไม่ให้เกิดอันตรายด้วยตัวเอง เมื่อใช้อุปกรณ์ที่สามารถถอดเข้าออกหรือเคลื่อนย้ายได้เสร็จแล้ว ให้นำกลับไปเก็บในที่ๆจัดเตรียมไว้ให้เหมือนเดิม',
        ],
        [
          '8. การแต่งกาย',
          'สมาชิกต้องแต่งกายให้เหมาะสม โดยสวมรองเท้าผ้าใบที่ไม่ทำลายพื้นยางของห้องออกกำลังกาย และเสื้อผ้าที่สวมใส่สบาย เหมาะกับการออกกำลังกาย ไม่ก่อความรำคาญให้ผู้อื่น',
        ],
        [
          '9. การเดินเตร็จเตร่ภายในบริเวณสถานที่ออกกำลังกาย',
          'ห้ามใช้อุปกณณืออกกำลังกายใดๆเป็ฯที่นั่งพักหรือพูดคุยกัน ซึ่งอาจเป็นอุปสรรคและขัดขวางการใช้อุปกรณ์นั้นๆต่อสมาชิกท่านอื่นได้',
        ],
        [
          '10. ของใช้ส่วนตัว',
          'สมาชิกจะต้องรับผิดชอบดูแลของใช้ส่วนตัวตลอดเวลาที่ใช้บริการในคลับ โดยเข้าใจและยอมรับความเสี่ยงที่จะสูญหายจากการละเลยไม่ดูแลของใช้ส่วนตัวดังกล่าวของตนเอง สมาชิกจะต้องจัดเก็บของใช้ส่วนตัวไว้ในล็อคเกรอ์ที่จัดเตรียมไว้ให้และนำกลับหลังจากใช้บริการเสร็จทุกครั้ง หากสมาชิกไม่ปฏิบัติตาม ทางคลับขอสงวนสิทธิ์ในการนำของใช้ส่วนตัวดังกล่าวไปเก็บรักษาไว้โดยสามารถติดต่อขอรับคืนได้ที่บริเวณเคาน์เตอร์ประชาสัมพันธ์',
        ],
        [
          '11. สัตว์เลี้ยง',
          'ไม่อนุญาตให้นำสัตว์เลี้ยงทุzกชนิดเข้ามาในบริเวณสถานที่ออกกำลังกายโดยเด็ดขาด',
        ],
        [
          '12. ผู้ฝึกสอนส่วนบุคคล',
          'สมาชิกไม่สามารถใช้สถานที่ของคลับเพื่อฝึกกับผู้ฝึกสอนส่วนบุคคลที่ไม่ใช่บึตลากรของคลับได้ ยกเว้นโดยเหตุผลทางการแพทย์',
        ],
        [
          '13. การเข้าชั้นเรียน',
          'สมาชิกจะต้องเข้าห้องก่อนชั้นเรียนเริ่ม หากชั้นเรียนเริ่มไปแล้ว สมาชิกจะต้องเข้าร่วมกิจกรรมในชั้นเรียนด้วยความสำรวม ไม่ก่อความรบกวนสมาชิกท่านอื่น โดนเฉพาะชั้นเรียนที่อาศัยสมาธิสูง เช่น ชั้นเรียนโยคะ เป็นต้น',
        ],
        [
          '14. สระว่ายน้ำ',
          'สมาชิกจะต้องปฏิบัติตามกฏระเบียบการใช้สระว่ายน้ำตามที่ได้ประกาศไว้ เช้น สวมชุดว่ายน้ำที่เหมาะสม ชำระร่างกายให้สะอาดก่อนลงสระ สำหรับผูที่ว่ายน้ำไม่เป็น หรือเด็กอายุต่ำกว่า 12 ปี จะต้องมีผู้ติดตามดูแลอย่างใกล้ชิด เพื่อป้องกันอันตรายที่อาจเกิดขึ้น',
        ],
        [
          '15. เด็กอายุต่ำกว่า 12 ปี',
          'ไม่อนุญาตให้เด็กอายุต่ำกว่า 12 ปี เข้าใช้บริการสถานที่ออกกำลังกาย ยกเว้น สระว่ายน้ำ และมุมพักผ่อนที่จัดเตรียมไว้',
        ],
        [
          '16. ผ้าขนหนู',
          'หากสมาชิกรับบริการผ้าขนหนูจากทางคลับ หลังจากใช้งานเสร็จแล้ว สมาชิกจะต้องนำผ้าขนหนูดังกล่าว มาคืนบริเวณเค้าเตอร์เช็คอืน หากไม่คืนผ้า ทางคลับอาจเรียกเก็บค่าใช้จ่ายของผ้าดังกล่าว',
        ],
      ])
    );
  }
}
