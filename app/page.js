import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 relative">
            <Image
              src="/loog.png"
              alt="EchoLearn Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">Echo Learn</h1>
        </div>
        <UserButton />
      </header>

      {/* Portal Content */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to the Echo Learn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your gateway to advanced AI-powered learning experiences
          </p>
        </div>
        
        {/* Main Card */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative h-32 w-32 flex-shrink-0">
                <Image
                  src="/loog.png"
                  alt="Application Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  AI Coaching Voice Agent
                </h2>
                <p className="text-gray-600">
                  Access your personalized AI coaching sessions with advanced voice interaction. 
                  Learn at your own pace with conversational AI guidance.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 relative mb-2">
                  <Image src="/lecture.png" alt="Lectures" fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-600">Lectures</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 relative mb-2">
                  <Image src="/interview.png" alt="Interviews" fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-600">Interviews</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 relative mb-2">
                  <Image src="/language.png" alt="Languages" fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-600">Languages</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 relative mb-2">
                  <Image src="/meditation.png" alt="Meditation" fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-600">Meditation</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="https://ai-coaching-voice-agent.vercel.app/"
                passHref
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-all">
                  Launch Application
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">Last accessed: Today</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-600">Online - Ready to use</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-0">
              <div className="border-b border-gray-100 p-4 flex items-center">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <div className="h-6 w-6 relative">
                    <Image src="/lecture.png" alt="Lecture" fill className="object-contain" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Topic Base Lecture: NextJS</p>
                  <p className="text-sm text-gray-500">Completed 2 days ago</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 p-4 flex items-center">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <div className="h-6 w-6 relative">
                    <Image src="/interview.png" alt="Interview" fill className="object-contain" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mock Interview: React Native</p>
                  <p className="text-sm text-gray-500">Completed 5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AI Coaching Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
