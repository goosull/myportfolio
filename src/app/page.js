import CursorGradient from "@/cursorgradient";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-auto">
      {/* 그라데이션 효과 */}
      <CursorGradient />

      {/* 콘텐츠 영역 */}
      <div className="relative z-10 overflow-auto my-32">
        <div className="container px-24 mx-auto">
          <div
            className="flex flex-col lg:flex-row gap-4"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            <div className="w-full lg:w-1/2 flex text-gray-300 items-center break-down">
              음식은 사람과 사람을 이어주는 매개체입니다. 맛있는 음식을 만들기
              위해 노력하는 것은 단순히 맛을 내는 것 이상의 의미가 있습니다.
              그것은 사람들의 마음을 움직이고, 그들의 삶을 풍요롭게 합니다.
              결국, 음식은 사랑과 배려의 표현입니다.
            </div>
            <div className="w-full lg:w-1/2 flex-col text-gray-300 break-down">
              <p className="my-3">
                사업이란 결국 사람을 상대하는 일입니다. 아무리 좋은 상품이나
                서비스를 만들어도, 사람의 마음을 얻지 못하면 성공할 수 없습니다.
                고객의 입장에서 생각하고, 그들에게 진심을 다해 다가가야 합니다.
                <span className="font-bold"> 진심은 통하는 법입니다.</span>
              </p>
              <p className="my-3">
                어려운 상황에서 포기하지 마세요. 성공은 계속해서 도전하고 실패를
                통해 얻어지는 것입니다. 실패를 두려워하지 말고, 실패에서 배워 더
                나은 길을 찾는 것이 중요합니다. 그 과정이 곧 성공으로 가는
                길입니다.
              </p>
              <p className="my-3">
                모든 일에는 기본이 중요합니다. 요리든 사업이든 기본에 충실하지
                않으면 쉽게 무너집니다. 기본을 다지면 위기가 왔을 때도 흔들리지
                않고 견딜 수 있습니다. 기본이 탄탄한 사람이 결국 끝까지
                살아남습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
