import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreeInput from "./three-input";
import { bezierCurveAll } from "@/utils/dnc";
import { usePointContext } from "@/hooks/usePointContext";
import NInput from "./n-inputs";

export function InputTabs() {
  const {
    setResultPoint,
    threePoint,
    iteration,
    setShowedIteration,
    showedIteration,
    nPoint,
  } = usePointContext();

  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>3-Points</TabsTrigger>
        <TabsTrigger value='password'>N-Points</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>3-Points</CardTitle>
            <CardDescription>
              Masukkan 3 titik dan banyak iterasi
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <ThreeInput />
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                const result = bezierCurveAll(threePoint, iteration);
                setResultPoint(result);
                setShowedIteration(0);
                console.log("showedIteration", showedIteration);
              }}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>N-points</CardTitle>
            <CardDescription>
              Masukkan n titik dan banyak iterasi
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <NInput />
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                const result = bezierCurveAll(nPoint, iteration);
                setResultPoint(result);
                setShowedIteration(0);
                console.log("showedIteration", showedIteration);
              }}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}