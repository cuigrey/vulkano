(function() {var implementors = {};
implementors["smallvec"] = ["impl&lt;'a, T: 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='smallvec/struct.SmallVecMoveIterator.html' title='smallvec::SmallVecMoveIterator'>SmallVecMoveIterator</a>&lt;'a, T&gt;","impl&lt;A: <a class='trait' href='smallvec/trait.Array.html' title='smallvec::Array'>Array</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='smallvec/struct.SmallVec.html' title='smallvec::SmallVec'>SmallVec</a>&lt;A&gt;",];implementors["crossbeam"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='crossbeam/mem/epoch/struct.Guard.html' title='crossbeam::mem::epoch::Guard'>Guard</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='crossbeam/sync/struct.ArcCell.html' title='crossbeam::sync::ArcCell'>ArcCell</a>&lt;T&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='crossbeam/struct.Scope.html' title='crossbeam::Scope'>Scope</a>&lt;'a&gt;",];implementors["shared_library"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.Drain.html' title='collections::vec_deque::Drain'>Drain</a>&lt;'a, T&gt; <span class='where'>where T: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt;","impl&lt;W&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/buffered/struct.BufWriter.html' title='std::io::buffered::BufWriter'>BufWriter</a>&lt;W&gt; <span class='where'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Select.html' title='std::sync::mpsc::select::Select'>Select</a>","impl&lt;'rx, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Handle.html' title='std::sync::mpsc::select::Handle'>Handle</a>&lt;'rx, T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Sender.html' title='std::sync::mpsc::Sender'>Sender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Receiver.html' title='std::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/condvar/struct.Condvar.html' title='std::sync::condvar::Condvar'>Condvar</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html' title='std::sync::mutex::MutexGuard'>MutexGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockReadGuard.html' title='std::sync::rwlock::RwLockReadGuard'>RwLockReadGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html' title='std::sync::rwlock::RwLockWriteGuard'>RwLockWriteGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.IntermediateBox.html' title='alloc::boxed::IntermediateBox'>IntermediateBox</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='shared_library/dynamic_library/struct.DynamicLibrary.html' title='shared_library::dynamic_library::DynamicLibrary'>DynamicLibrary</a>",];implementors["vulkano"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/buffer/sys/struct.UnsafeBuffer.html' title='vulkano::buffer::sys::UnsafeBuffer'>UnsafeBuffer</a>","impl&lt;F, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/buffer/view/struct.BufferView.html' title='vulkano::buffer::view::BufferView'>BufferView</a>&lt;F, B&gt; <span class='where'>where B: <a class='trait' href='vulkano/buffer/traits/trait.Buffer.html' title='vulkano::buffer::traits::Buffer'>Buffer</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.Drain.html' title='collections::vec_deque::Drain'>Drain</a>&lt;'a, T&gt; <span class='where'>where T: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt;","impl&lt;W&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/buffered/struct.BufWriter.html' title='std::io::buffered::BufWriter'>BufWriter</a>&lt;W&gt; <span class='where'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Select.html' title='std::sync::mpsc::select::Select'>Select</a>","impl&lt;'rx, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Handle.html' title='std::sync::mpsc::select::Handle'>Handle</a>&lt;'rx, T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Sender.html' title='std::sync::mpsc::Sender'>Sender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Receiver.html' title='std::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/condvar/struct.Condvar.html' title='std::sync::condvar::Condvar'>Condvar</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html' title='std::sync::mutex::MutexGuard'>MutexGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockReadGuard.html' title='std::sync::rwlock::RwLockReadGuard'>RwLockReadGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html' title='std::sync::rwlock::RwLockWriteGuard'>RwLockWriteGuard</a>&lt;'a, T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.IntermediateBox.html' title='alloc::boxed::IntermediateBox'>IntermediateBox</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/command_buffer/struct.Submission.html' title='vulkano::command_buffer::Submission'>Submission</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/command_buffer/pool/struct.UnsafeCommandPool.html' title='vulkano::command_buffer::pool::UnsafeCommandPool'>UnsafeCommandPool</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/command_buffer/submit/struct.Submission.html' title='vulkano::command_buffer::submit::Submission'>Submission</a>","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/command_buffer/sys/struct.UnsafeCommandBufferBuilder.html' title='vulkano::command_buffer::sys::UnsafeCommandBufferBuilder'>UnsafeCommandBufferBuilder</a>&lt;P&gt; <span class='where'>where P: <a class='trait' href='vulkano/command_buffer/pool/trait.CommandPool.html' title='vulkano::command_buffer::pool::CommandPool'>CommandPool</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/descriptor/descriptor_set/struct.DescriptorPool.html' title='vulkano::descriptor::descriptor_set::DescriptorPool'>DescriptorPool</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/descriptor/descriptor_set/struct.UnsafeDescriptorSet.html' title='vulkano::descriptor::descriptor_set::UnsafeDescriptorSet'>UnsafeDescriptorSet</a>","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/descriptor/descriptor_set/struct.UnsafeDescriptorSetLayout.html' title='vulkano::descriptor::descriptor_set::UnsafeDescriptorSetLayout'>UnsafeDescriptorSetLayout</a>&lt;P&gt; <span class='where'>where P: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/descriptor/pipeline_layout/struct.UnsafePipelineLayout.html' title='vulkano::descriptor::pipeline_layout::UnsafePipelineLayout'>UnsafePipelineLayout</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>","impl&lt;L&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/framebuffer/struct.Framebuffer.html' title='vulkano::framebuffer::Framebuffer'>Framebuffer</a>&lt;L&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/framebuffer/struct.UnsafeRenderPass.html' title='vulkano::framebuffer::UnsafeRenderPass'>UnsafeRenderPass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/image/sys/struct.UnsafeImage.html' title='vulkano::image::sys::UnsafeImage'>UnsafeImage</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/image/sys/struct.UnsafeImageView.html' title='vulkano::image::sys::UnsafeImageView'>UnsafeImageView</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/instance/debug/struct.DebugCallback.html' title='vulkano::instance::debug::DebugCallback'>DebugCallback</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/instance/struct.Instance.html' title='vulkano::instance::Instance'>Instance</a>","impl&lt;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/memory/struct.DeviceMemory.html' title='vulkano::memory::DeviceMemory'>DeviceMemory</a>&lt;D&gt; <span class='where'>where D: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl&lt;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/memory/struct.MappedDeviceMemory.html' title='vulkano::memory::MappedDeviceMemory'>MappedDeviceMemory</a>&lt;D&gt; <span class='where'>where D: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl&lt;'a, T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a> + 'a, D: 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/memory/struct.CpuAccess.html' title='vulkano::memory::CpuAccess'>CpuAccess</a>&lt;'a, T, D&gt; <span class='where'>where D: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/memory/pool/struct.StdHostVisibleMemoryTypePoolAlloc.html' title='vulkano::memory::pool::StdHostVisibleMemoryTypePoolAlloc'>StdHostVisibleMemoryTypePoolAlloc</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/memory/pool/struct.StdNonHostVisibleMemoryTypePoolAlloc.html' title='vulkano::memory::pool::StdNonHostVisibleMemoryTypePoolAlloc'>StdNonHostVisibleMemoryTypePoolAlloc</a>","impl&lt;Pl&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/pipeline/struct.ComputePipeline.html' title='vulkano::pipeline::ComputePipeline'>ComputePipeline</a>&lt;Pl&gt;","impl&lt;Mv, L, Rp&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/pipeline/struct.GraphicsPipeline.html' title='vulkano::pipeline::GraphicsPipeline'>GraphicsPipeline</a>&lt;Mv, L, Rp&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/pipeline/cache/struct.PipelineCache.html' title='vulkano::pipeline::cache::PipelineCache'>PipelineCache</a>","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/pipeline/shader/struct.ShaderModule.html' title='vulkano::pipeline::shader::ShaderModule'>ShaderModule</a>&lt;P&gt; <span class='where'>where P: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/query/struct.OcclusionQueriesPool.html' title='vulkano::query::OcclusionQueriesPool'>OcclusionQueriesPool</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/sampler/struct.Sampler.html' title='vulkano::sampler::Sampler'>Sampler</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/swapchain/struct.Surface.html' title='vulkano::swapchain::Surface'>Surface</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/swapchain/struct.Swapchain.html' title='vulkano::swapchain::Swapchain'>Swapchain</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/sync/struct.Event.html' title='vulkano::sync::Event'>Event</a>","impl&lt;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/sync/struct.Fence.html' title='vulkano::sync::Fence'>Fence</a>&lt;D&gt; <span class='where'>where D: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>","impl&lt;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='vulkano/sync/struct.Semaphore.html' title='vulkano::sync::Semaphore'>Semaphore</a>&lt;D&gt; <span class='where'>where D: <a class='trait' href='vulkano/trait.SafeDeref.html' title='vulkano::SafeDeref'>SafeDeref</a>&lt;Target=<a class='struct' href='vulkano/device/struct.Device.html' title='vulkano::device::Device'>Device</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
