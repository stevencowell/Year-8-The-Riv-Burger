const COURSE_MODULES = [
  {
    id: 1, title: 'The challenge', subtitle: 'Understand the design situation before proposing a solution.',
    sections: [
      {title:'1.1 Design situation and brief', html:`<p>A design situation explains the need or opportunity. In this unit, a small local food business wants a burger that appeals to young people while showing that fresh, local and more sustainable choices can compete with familiar fast-food products.</p><p>The design brief turns that situation into action: <strong>develop a signature burger featuring locally grown produce and home-grown herbs</strong>. Your solution needs to be realistic for a school food-technology setting.</p>`},
      {title:'1.2 Users and needs', html:`<p>A successful burger is designed for people, not only for a photograph. A young customer may value flavour, appearance, value, convenience and a size that is comfortable to hold and eat. The cook needs a clear recipe, safe method, suitable tools and enough time.</p><p>These needs can compete. Extra height may look impressive but reduce ergonomics. Many fillings may add flavour but make production slower and the burger unstable.</p>`},
      {title:'1.3 Criteria and constraints', html:`<p><strong>Criteria</strong> are the qualities used to judge success: function, appearance, creativity, ergonomics, ethical choices, environmental impact and time management. <strong>Constraints</strong> are real limits such as lesson time, available equipment, ingredient access, budget, skills, safety and dietary needs.</p><div class="callout"><strong>Design habit:</strong> write criteria so they can be tested. “Easy to hold without fillings falling out” is more useful than “good”.</div>`}
    ],
    questions: [
      {q:'What is the main purpose of a design brief?', options:['To list every ingredient immediately','To turn a need or opportunity into a clear design task','To guarantee the first idea will work'], answer:1, review:'1.1 Design situation and brief'},
      {q:'Which statement is a testable design criterion?', options:['The burger is nice','The burger uses food','The burger can be held and eaten without the fillings falling out'], answer:2, review:'1.3 Criteria and constraints'},
      {q:'Which is most likely a constraint in a school practical?', options:['The available lesson time','The colour of the heading on this page','Whether burgers exist'], answer:0, review:'1.3 Criteria and constraints'},
      {q:'Why can a very tall burger create a problem?', options:['Height always removes flavour','It can reduce comfort and stability for the user','It makes food hygiene unnecessary'], answer:1, review:'1.2 Users and needs'},
      {q:'Who should be considered when designing the solution?', options:['Only the person taking a photo','The customer and the person producing the burger','Nobody until after production'], answer:1, review:'1.2 Users and needs'}
    ],
    prompts: [
      {id:'m1-brief', label:'Rewrite the design brief in your own words. Include the product, intended user and two important qualities.'},
      {id:'m1-criteria', label:'Write three testable success criteria and two realistic constraints for your Riv Burger.'}
    ]
  },
  {
    id: 2, title: 'Safe food practices', subtitle: 'Protect people by controlling hygiene and food-production risks.',
    sections: [
      {title:'2.1 Personal hygiene', html:`<p>Food handlers can transfer microorganisms, hair, dirt and allergens to food. Before production, secure hair, remove or control jewellery as directed, cover cuts, wear the required protective clothing, and wash hands thoroughly with soap and running water before drying them.</p><p>Wash hands again after touching raw food, waste, your face or hair, and after any task that may contaminate them.</p>`},
      {title:'2.2 Cross-contamination', html:`<p>Cross-contamination happens when harmful microorganisms or allergens move from one food, surface, tool or person to another. Keep raw ingredients separate from ready-to-eat foods. Use the colour-coded boards and equipment directed by your teacher, clean and sanitise work areas, and never reuse a utensil that has touched raw food without washing it correctly.</p><div class="callout safety"><strong>Non-negotiable:</strong> follow teacher instructions for storage, cooking, cooling and allergen controls. If unsure, stop and ask.</div>`},
      {title:'2.3 Hazards and controls', html:`<p>A <strong>hazard</strong> is something with the potential to cause harm. A <strong>risk control</strong> reduces the chance or severity of that harm. Knife controls include a stable board, correct grip, a safe cutting technique, full attention and carrying the knife only as instructed. Heat controls include dry oven mitts, clear handles and warning others about hot equipment.</p><p>Safety also includes garden work: use gloves and follow instructions when handling potting mix, minimise dust, work in ventilation and wash hands afterwards.</p>`}
    ],
    questions: [
      {q:'When should hands be washed again during a practical?', options:['After touching raw food or waste','Only when the lesson ends','Only if the teacher is watching'], answer:0, review:'2.1 Personal hygiene'},
      {q:'What is cross-contamination?', options:['A burger with two sauces','The transfer of harmful microorganisms or allergens','Cooking two items at once'], answer:1, review:'2.2 Cross-contamination'},
      {q:'Which action best controls a knife hazard?', options:['Cut quickly on a moving board','Use a stable board and the instructed technique','Leave the knife hidden in washing-up water'], answer:1, review:'2.3 Hazards and controls'},
      {q:'What should you do if an allergen requirement is unclear?', options:['Guess from the packaging colour','Continue and fix it later','Stop and ask the teacher'], answer:2, review:'2.2 Cross-contamination'},
      {q:'Which is a suitable potting-mix control?', options:['Create as much dust as possible','Follow instructions, minimise dust and wash hands','Eat while filling pots'], answer:1, review:'2.3 Hazards and controls'}
    ],
    prompts: [
      {id:'m2-routine', label:'Write your before-cooking hygiene routine as a clear six-step checklist.'},
      {id:'m2-hazards', label:'Identify one biological, one physical and one heat or equipment hazard. Give a specific control for each.'}
    ]
  },
  {
    id: 3, title: 'Tools and workflow', subtitle: 'Prepare an efficient workstation and use tools for their intended purpose.',
    sections: [
      {title:'3.1 Mise en place', html:`<p><em>Mise en place</em> means putting everything in place before production. Read the complete method, wash hands, sanitise the bench, collect and check equipment, measure ingredients, prepare waste containers and preheat equipment only when instructed.</p><p>This preparation reduces rushing and helps you notice missing ingredients or unsafe conditions before they become problems.</p>`},
      {title:'3.2 Selecting tools', html:`<p>Select a tool because its function suits the job. A cook's knife can chop larger ingredients; a small knife provides control for smaller preparation; measuring spoons suit small quantities; a digital scale measures mass; and a spatula can turn a patty while keeping hands away from heat.</p><p>Use every tool only after demonstration and according to classroom rules.</p>`},
      {title:'3.3 A clean workflow', html:`<p>Plan movement from preparation to cooking, assembly and cleaning. Keep handles away from bench edges, wipe spills promptly, return ingredients to safe storage, and clean as you go without placing sharp tools into hidden washing-up water.</p><p>At the end, wash, rinse and dry equipment as directed, sanitise the workstation and complete the teacher's practical checklist.</p>`}
    ],
    questions: [
      {q:'What does mise en place achieve?', options:['It organises ingredients, equipment and tasks before cooking','It replaces the recipe','It means washing only after cooking'], answer:0, review:'3.1 Mise en place'},
      {q:'Which tool directly measures mass?', options:['Measuring spoon','Digital scale','Spatula'], answer:1, review:'3.2 Selecting tools'},
      {q:'Why read the whole method before starting?', options:['To spot the sequence, equipment and timing needs','To avoid measuring ingredients','To make every step optional'], answer:0, review:'3.1 Mise en place'},
      {q:'Where should a sharp knife be placed during cleaning?', options:['Hidden in cloudy sink water','In the safe location directed by the teacher','Under a tea towel'], answer:1, review:'3.3 A clean workflow'},
      {q:'Which action supports an efficient workflow?', options:['Leave every spill until the end','Move pan handles over the bench edge','Clean as you go and keep movement paths clear'], answer:2, review:'3.3 A clean workflow'}
    ],
    prompts: [
      {id:'m3-setup', label:'Describe how you would set up a safe workstation for preparing a burger patty and fresh salad.'},
      {id:'m3-tools', label:'Choose four tools for your likely recipe. Explain the function of each and one safe-use point.'}
    ]
  },
  {
    id: 4, title: 'Burger anatomy', subtitle: 'Use structure and sensory properties to make the product work.',
    sections: [
      {title:'4.1 A layered food system', html:`<p>A burger is a system of interacting parts. The bun contains the product and gives structure. The main filling provides body and a central flavour. Fresh components add colour, texture and freshness. Sauces add moisture and flavour but can also make the bun soggy. Each layer affects the whole product.</p><div class="burger-stack" role="img" aria-label="Diagram showing burger layers: top bun, fresh ingredients, sauce, main filling and base bun"><div class="bun">Top bun · hold and protect</div><div class="fresh">Fresh layer · colour and crunch</div><div class="sauce">Sauce · flavour and moisture</div><div class="filling">Main filling · body and protein</div><div class="bun">Base bun · stable foundation</div></div>`},
      {title:'4.2 Sensory properties', html:`<p>Sensory properties are features detected by the senses: appearance, aroma, flavour, texture and sound. Designers can create contrast—such as a crisp vegetable with a soft bun—but too many competing flavours or textures can make the product confusing.</p><p>Use precise words in evaluation: golden, crisp, juicy, smoky, fresh, balanced or overly salty are more useful than “good”.</p>`},
      {title:'4.3 Function and stability', html:`<p>Place wet ingredients away from surfaces that become soggy quickly, drain washed vegetables, match the bun size to the filling, and avoid layers that slide against each other. The base should sit flat and the assembled burger should remain comfortable to hold.</p><p>A product can look appealing and still fail if it collapses, leaks or is difficult to eat.</p>`}
    ],
    questions: [
      {q:'What is a main function of the bun?', options:['To remove every flavour','To contain the product and provide structure','To make hygiene optional'], answer:1, review:'4.1 A layered food system'},
      {q:'Which is a sensory property?', options:['Aroma','Submission date','Desk number'], answer:0, review:'4.2 Sensory properties'},
      {q:'Why should washed vegetables be drained?', options:['To reduce excess moisture and sogginess','To remove all texture','To make the burger taller'], answer:0, review:'4.3 Function and stability'},
      {q:'Which evaluation is most precise?', options:['It was good','The crisp lettuce contrasted with the soft bun','I liked it'], answer:1, review:'4.2 Sensory properties'},
      {q:'Which change is most likely to improve stability?', options:['Match bun and filling sizes','Add every possible sauce','Stack slippery layers without a plan'], answer:0, review:'4.3 Function and stability'}
    ],
    prompts: [
      {id:'m4-stack', label:'Plan a burger stack from bottom to top. Explain the function of each layer.'},
      {id:'m4-sensory', label:'Write a sensory profile for your intended burger using precise appearance, aroma, flavour and texture words.'}
    ]
  },
  {
    id: 5, title: 'Ingredients and agriculture', subtitle: 'Trace ingredients to industries, producers and places.',
    sections: [
      {title:'5.1 From primary production to plate', html:`<p>Agriculture supplies plant and animal products. Wheat may be milled into flour for buns; cattle or legumes may supply a patty ingredient; dairy farming supplies milk for cheese; and horticulture supplies vegetables and herbs. Processing, packaging, transport, retail and food service connect primary production to the burger.</p>`},
      {title:'5.2 Local and seasonal choices', html:`<p>“Local” should be supported by evidence, not used as a vague label. It may refer to a grower, producer or business within a defined region. Seasonal produce can be plentiful and suitable for local conditions, but availability and price still need checking.</p><p>Research the producer, ingredient origin, distance, season and the evidence used to make each claim.</p>`},
      {title:'5.3 Ethical and environmental factors', html:`<p>Food choices can affect soil, water, biodiversity, animal welfare, energy use, packaging, transport and waste. No ingredient is automatically perfect. A responsible comparison considers reliable evidence and the full production system.</p><p>Practical actions include planning quantities, using suitable portions, choosing reusable equipment, separating waste as directed and using garden produce effectively.</p>`}
    ],
    questions: [
      {q:'Which industry commonly supplies lettuce and herbs?', options:['Horticulture','Mining','Textile manufacturing'], answer:0, review:'5.1 From primary production to plate'},
      {q:'What makes a “local” claim stronger?', options:['A green label','A defined region and evidence about the producer or origin','A guess based on price'], answer:1, review:'5.2 Local and seasonal choices'},
      {q:'Which occurs after primary production?', options:['Processing and transport','Sunlight reaching a crop','Roots taking up water'], answer:0, review:'5.1 From primary production to plate'},
      {q:'Which is an environmental consideration?', options:['Packaging and food waste','The page number','The font used in a recipe'], answer:0, review:'5.3 Ethical and environmental factors'},
      {q:'Why avoid claiming one ingredient is automatically sustainable?', options:['Sustainability depends on evidence and the production system','All ingredients are identical','Evidence never matters'], answer:0, review:'5.3 Ethical and environmental factors'}
    ],
    prompts: [
      {id:'m5-sources', label:'Choose four likely burger ingredients. Trace each to an agricultural industry and identify one processing or transport step.'},
      {id:'m5-local', label:'Define what “local” will mean in your design, then record the evidence you would need to support two local ingredient claims.'}
    ]
  },
  {
    id: 6, title: 'Develop your design', subtitle: 'Generate alternatives, test them against criteria and justify a direction.',
    sections: [
      {title:'6.1 Divergent thinking', html:`<p>Do not stop at the first idea. Generate several distinct burger concepts by changing the main filling, bun, herbs, vegetables, sauce, form or flavour profile. Four genuinely different options create a stronger comparison than four drawings of almost the same product.</p>`},
      {title:'6.2 Annotating concepts', html:`<p>An annotation explains a design decision. Label ingredients, layer order, sensory effect, source, function, safety issue or expected user benefit. “Parsley yoghurt sauce adds freshness and uses a garden herb” communicates more than an arrow labelled “sauce”.</p>`},
      {title:'6.3 Choosing with evidence', html:`<p>Use your criteria to compare options. A decision matrix can make trade-offs visible, but scores need reasons. The highest total does not remove your responsibility to explain why the chosen design best fits the brief and constraints.</p><div class="callout"><strong>Appropriate response example:</strong> “I selected Concept C because its flat patty and matching bun improve stability, while garden parsley supports the brief. I will reduce the sauce quantity to control sogginess.”</div>`}
    ],
    questions: [
      {q:'Why generate several concepts?', options:['To explore genuinely different ways to meet the brief','To avoid making a decision','To repeat the same idea four times'], answer:0, review:'6.1 Divergent thinking'},
      {q:'Which annotation is most useful?', options:['Nice','Sauce','Parsley yoghurt sauce adds freshness and uses a garden herb'], answer:2, review:'6.2 Annotating concepts'},
      {q:'What should support a decision-matrix score?', options:['A reason linked to criteria','A random number','The order concepts were drawn'], answer:0, review:'6.3 Choosing with evidence'},
      {q:'What makes four options genuinely different?', options:['Different title colours only','Meaningful changes to ingredients, form or flavour','Drawing the same burger four times'], answer:1, review:'6.1 Divergent thinking'},
      {q:'A strong final justification should mention:', options:['Only personal preference','Criteria, constraints and any planned refinement','Only the highest score'], answer:1, review:'6.3 Choosing with evidence'}
    ],
    prompts: [
      {id:'m6-options', label:'Describe four distinct burger concepts. For each, identify the main filling, local or garden feature and flavour direction.'},
      {id:'m6-decision', label:'Select one concept. Justify it against at least four criteria and identify one change needed before production.'}
    ]
  },
  {
    id: 7, title: 'Garden to kitchen', subtitle: 'Connect plant needs, herb production and responsible resource use.',
    sections: [
      {title:'7.1 What plants need', html:`<p>Healthy plants require light, water, air, suitable temperature, nutrients and a growing medium that supports roots. Too little water can cause wilting; too much can reduce oxygen around roots. Light and temperature affect growth, while nutrients support plant processes.</p>`},
      {title:'7.2 Growing and harvesting herbs', html:`<p>Herbs such as parsley, basil or chives can add flavour, aroma and colour. Identify plants correctly, harvest only with permission, select healthy material, wash produce as instructed and use clean tools. Harvesting methods should allow the plant to continue growing where possible.</p>`},
      {title:'7.3 Sustainability in practice', html:`<p>Sustainable practice aims to meet present needs while protecting future environmental, social and economic wellbeing. In a school garden and kitchen, this includes efficient watering, caring for soil, planning harvests, avoiding unnecessary food waste and valuing the work required to grow ingredients.</p><p>A claim should connect an action to an effect—for example, measuring ingredients carefully can reduce avoidable waste.</p>`}
    ],
    questions: [
      {q:'Why can overwatering harm roots?', options:['It can reduce available oxygen around them','It creates extra sunlight','It always adds nutrients'], answer:0, review:'7.1 What plants need'},
      {q:'Which is a safe harvesting action?', options:['Taste unknown plants','Harvest any plant without permission','Identify the herb and use clean tools as instructed'], answer:2, review:'7.2 Growing and harvesting herbs'},
      {q:'What can fresh herbs add to a burger?', options:['Flavour, aroma and colour','A guaranteed submission mark','A replacement for safe food handling'], answer:0, review:'7.2 Growing and harvesting herbs'},
      {q:'Which action can reduce avoidable food waste?', options:['Measure planned quantities','Collect ingredients without a recipe','Discard usable ingredients immediately'], answer:0, review:'7.3 Sustainability in practice'},
      {q:'A strong sustainability explanation links:', options:['An action to its likely effect','A colour to a personal guess','A slogan to no evidence'], answer:0, review:'7.3 Sustainability in practice'}
    ],
    prompts: [
      {id:'m7-plant', label:'Explain how light, water, air, nutrients and soil or growing medium support a healthy herb plant.'},
      {id:'m7-action', label:'Propose three realistic garden-to-kitchen sustainability actions and explain the likely effect of each.'}
    ]
  },
  {
    id: 8, title: 'Plan production', subtitle: 'Turn the selected concept into an accurate, manageable production plan.',
    sections: [
      {title:'8.1 A production-ready recipe', html:`<p>A recipe must communicate exact ingredients, quantities and an ordered method. Use consistent units, name preparation requirements such as “finely chopped”, and include the yield. Sequence steps so preparation, cooking and assembly can happen safely within the available time.</p>`},
      {title:'8.2 Food order and resources', html:`<p>A food order totals the ingredients required for the planned yield. Check what the school supplies and what must be ordered or brought, according to teacher directions. Avoid duplicates, use realistic quantities and identify any ingredient with an allergen or storage requirement.</p>`},
      {title:'8.3 Workplan', html:`<p>A workplan maps time, activity, equipment and ingredients. Begin with hygiene and setup, identify tasks that can overlap safely, allow time for cooking and checking, and protect enough time for assembly, photography, cleaning and evaluation.</p><p>Dates, lesson length, supplied ingredients and submission arrangements are <strong>Teacher to confirm</strong>.</p>`}
    ],
    questions: [
      {q:'What belongs in a production-ready recipe?', options:['Exact quantities and an ordered method','Only a product name','Unmeasured ingredients'], answer:0, review:'8.1 A production-ready recipe'},
      {q:'Why include the recipe yield?', options:['To match ingredient quantities to the intended number of serves','To replace food safety','To choose a font'], answer:0, review:'8.1 A production-ready recipe'},
      {q:'What should a food order avoid?', options:['Ingredient names','Realistic quantities','Unnecessary duplicates'], answer:2, review:'8.2 Food order and resources'},
      {q:'What should the workplan protect time for?', options:['Only assembly','Setup, production, recording and cleaning','Waiting without a task'], answer:1, review:'8.3 Workplan'},
      {q:'Who confirms current lesson timing and supplied ingredients?', options:["A previous year's document",'The teacher','This website automatically'], answer:1, review:'8.3 Workplan'}
    ],
    prompts: [
      {id:'m8-recipe', label:'Draft your recipe with yield, exact quantities and a numbered method. Include preparation words and safe sequencing.'},
      {id:'m8-workplan', label:'Create a timed workplan from setup to cleaning. Identify equipment, ingredients and one quality check at each major stage.'}
    ]
  },
  {
    id: 9, title: 'Produce and present', subtitle: 'Manage safety, timing and quality while making the final product.',
    sections: [
      {title:'9.1 Follow, monitor, adapt', html:`<p>Use the workplan as a guide, not as an excuse to ignore evidence. Monitor appearance, texture, temperature controls and time. If a safe change is needed, pause, consult the teacher when required, record what changed and explain why.</p>`},
      {title:'9.2 Quality control', html:`<p>Quality control checks the product during production rather than waiting until the end. Examples include checking ingredient measurements, patty size, even preparation, browning, bun condition, layer order and workstation hygiene. Follow teacher instructions for checking that food is safely cooked.</p>`},
      {title:'9.3 Presentation and evidence', html:`<p>Presentation should support the intended user and make the burger's structure visible. Use a clean plate or board, remove distracting spills and avoid inedible decoration. Photograph the finished product in good light from an angle that shows its layers and scale.</p><p>Record the final burger promptly. A photograph supports evidence but does not replace written evaluation.</p>`}
    ],
    questions: [
      {q:'What should you do when a safe change to the plan is needed?', options:['Hide it','Record what changed and explain why','Ignore the problem'], answer:1, review:'9.1 Follow, monitor, adapt'},
      {q:'When does quality control occur?', options:['Only after submission','During production at planned checkpoints','Before reading the recipe'], answer:1, review:'9.2 Quality control'},
      {q:'Which is a useful quality check?', options:['Patty size and even preparation','Whether the page is green','How fast another group works'], answer:0, review:'9.2 Quality control'},
      {q:'What makes strong photographic evidence?', options:['A cluttered bench in poor light','A clear view showing the product and layers','A photo of an unrelated burger'], answer:1, review:'9.3 Presentation and evidence'},
      {q:'Does a photograph replace written evaluation?', options:['Yes, always','Only if it has a filter','No; it supports but does not replace evaluation'], answer:2, review:'9.3 Presentation and evidence'}
    ],
    prompts: [
      {id:'m9-log', label:'Write a production log: what followed the plan, what changed, why it changed and how safety was maintained.'},
      {id:'m9-quality', label:'Record four quality-control checks for your final practical and the evidence you will collect for each.'}
    ]
  },
  {
    id: 10, title: 'Evaluate and reflect', subtitle: 'Judge the solution with evidence and use the result to improve.',
    sections: [
      {title:'10.1 Evaluate against criteria', html:`<p>Evaluation is a reasoned judgement, not a description of what you did. Return to each success criterion, state the result, cite evidence and explain the judgement. Evidence may include observations, measurements, photographs, user feedback and comparison with the design plan.</p>`},
      {title:'10.2 Consider the whole solution', html:`<p>Evaluate function, appearance, sensory properties, ergonomics, cost, resource use, safety, cultural suitability, ethical factors, sustainability and technical quality where relevant. Not every factor will be equally important, so explain priorities.</p><p>Feedback is useful evidence, but one person's preference should not automatically outweigh the brief or safety requirements.</p>`},
      {title:'10.3 Reflect and improve', html:`<p>A useful improvement is specific and achievable: name what would change, how it would change and the expected effect. “Reduce the sauce from two tablespoons to one so the base stays firm” is stronger than “make it better”.</p><p>Finish by reflecting on your planning, practical skills, independence and response to problems. Honest reflection shows learning.</p>`}
    ],
    questions: [
      {q:'What makes an evaluation a judgement?', options:['It uses evidence to decide how well criteria were met','It lists the method again','It says “good” without a reason'], answer:0, review:'10.1 Evaluate against criteria'},
      {q:'Which can be evaluation evidence?', options:['Measurements, observations and user feedback','An unrelated advertisement','A guess made before production'], answer:0, review:'10.1 Evaluate against criteria'},
      {q:'Why might criteria have different importance?', options:['The brief and user needs create priorities','Safety never matters','All design factors are identical'], answer:0, review:'10.2 Consider the whole solution'},
      {q:'Which improvement is most specific?', options:['Make it better','Use less sauce so the base stays firm','Try harder'], answer:1, review:'10.3 Reflect and improve'},
      {q:'What should final reflection include?', options:['Planning, skills, independence and problem-solving','Only the product name',"Only another student's result"], answer:0, review:'10.3 Reflect and improve'}
    ],
    prompts: [
      {id:'m10-evaluation', label:'Evaluate your final burger against at least six criteria. For each, give evidence and a clear judgement.'},
      {id:'m10-reflection', label:'Identify three specific improvements and reflect on your planning, practical skills, independence and response to problems.'}
    ]
  }
];
