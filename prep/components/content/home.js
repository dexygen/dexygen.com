const template = `
  <div>
    <div class="mt-1 content-font px-2">
      <div class="text-lg md:text-xl lg:text-2xl italic">
      "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
      </div>
      <div class="text-base lg:text-lg mb-2">
      -- Antoine de Saint-Exupery
      </div>
      <div class="sans-font heading-green font-bold text-lg lg:text-xl mb-2">
        E.g. Usage of
        <a href="https://github.com/dexygen/jackrabbitmvc/blob/c7c8f9ca06840a45b0776c3de2d3063457989f9e/jrmvc.lib.php" 
          target="_blank" class="underline home--jrvmc-link">
            JrMVC</a>
            a 75-line PHP micro-framework:
      </div>
      <div class="px-2 py-1">
        <pre><code class="php hljs">
require('jrmvc.lib.php');                              // 1) require library                           

class DemoMTO extends JrMvcMTO {                       // 1a) optionally extend MTO for non-template output, e.g. JSON
 function onNullTemplate() {
   echo json_encode($this->model); // Instead a binary such as an xls or pdf could be sent
 }
}

class DemoController extends AbstractJrMvcController { // 2) extend Controller  
  function applyInputToModel() {                      // 3) implement only required method

     // Create separate demo.tpl.php file and test content with: print_r($model);
     $mto = new JrMvcMTO('demo.tpl.php');             // 4) instantiate

     // To output json instead use extended MTO above: $mto = new DemoMTO(JrMvcMTO::NULL_TPL);
     // Or in PHP 7 you can use an inner class instead of defining DemoMTO above this class:
     $mto = new class(JrMvcMTO::NULL_TPL) extends JrMvcMTO {
         function onNullTemplate() {
             echo json_encode($this->model);
         }
     };

     $mto->setModelValue('Su', 'Sunday');             // 5) assignments              
     $mto->setModelValue('Mo', 'Monday');
     $mto->setModelValue('Tu', 'Tuesday');
     $mto->setModelValue('We', 'Wednesday');

     $mto->setModelValues(['Th'=>'Thursday', 'Fr'=>'Friday', 'Sa'=>'Saturday']);

     return $mto;                                     // 6) return MTO
   }
}
DemoController::sendResponse(new DemoController());    // 7) send response
*
* OUTPUT:
*
$model: Array
(
[Su] => Sunday
[Mo] => Monday
[Tu] => Tuesday
[We] => Wednesday
[Th] => Thursday
[Fr] => Friday
[Sa] => Saturday
)
        </code></pre>
      </div>
    </div>
  </div>
`;

export default {
  name: 'Home',
  template: template
};